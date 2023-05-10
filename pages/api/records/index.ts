import { addRecord, getRecords } from "@/mongo/functions/form-functions";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, body } = req;

    switch (method) {
        case "POST":
            {
                const [result, err] = await addRecord(body);

                if (err !== null) {
                    res.status(500).send(err.message);
                } else if (result !== null) res.status(200).json(result);
            }

            break;
        case "GET":
            {
                const [result, err] = await getRecords();

                if (err !== null) {
                    res.status(500).send(err.message);
                } else if (result !== null) res.status(200).json(result);
            }
            break;
        default:
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
};

export default handler;
