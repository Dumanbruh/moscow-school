import { recordsCol } from "@/mongo/mongo";
import { BackendFunction } from "@/mongo/models/backend-function";
import { Record } from "@/mongo/models/record";
import { recordHTML } from "@/utils/record";
import { sendMail } from "@/utils/transporter";
import { randomInt } from "crypto";
import { ObjectId, WithId } from "mongodb";

export const getRecords = async (): Promise<
  BackendFunction<WithId<Record>[]>
> => {
  try {
    const cursor = recordsCol.find().sort({ date: 1 });
    const events = await cursor.toArray();
    const result = events;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const addRecord = async (
  record: Record
): Promise<BackendFunction<string>> => {
  const cursor = recordsCol.find({
    email: record.email,
  });

  if ((await cursor.toArray()).length !== 0) {
    let err = new Error("Этот email уже использован");
    return [null, err];
  }

  record.date = new Date(record.date);
  record.code = randomInt(100000, 999999);
  record.name = record.name.trim();

  await recordsCol.insertOne(record);

  try {
    let msg = {
      to: record.email,
      subject: "День Физкультурника: запись подтверждена",
      html: recordHTML(record.code),
    };

    sendMail(msg);

    const result = "Вы успешно зарегистрировались";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const deleteRecord = async (
  recordId: string
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(recordId) };

    await recordsCol.deleteOne(filter);

    const result = "Запись удалена";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const getRecordByData = async (
  code: number
): Promise<BackendFunction<Record>> => {
  try {
    const doc = await recordsCol.findOne({ code });

    if (doc === null) {
      let err = new Error("Такого кода в базе нету");
      return [null, err];
    }

    const result = doc;

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

export const validateRecord = async (
  recordId: string
): Promise<BackendFunction<string>> => {
  try {
    const filter = { _id: new ObjectId(recordId) };

    await recordsCol.updateOne(filter, { $set: { arrived: true } });

    const result = "Запись подтверждена";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};
