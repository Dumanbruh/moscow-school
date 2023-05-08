import { BackendFunction } from "@/models/backend-function";
import { Form } from "@/models/form";
import { sendTestEmail } from "@/utils/transporter";
import { NextApiRequest, NextApiResponse } from "next";

const testFunction = async (body: Form): Promise<BackendFunction<string>> => {
  try {
    const { email } = body;

    sendTestEmail(email);

    const result = "Вы успешно записались";

    return [result, null];
  } catch (e) {
    const err = e as Error;
    return [null, err];
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      {
        const [result, err] = await testFunction(body);

        if (err !== null) {
          res.status(500).send(err.message);
        } else if (result !== null) res.status(200).json(result);
      }

      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
