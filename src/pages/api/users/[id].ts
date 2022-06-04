import { NextApiRequest, NextApiResponse } from "next";

const users = (request: NextApiRequest, response: NextApiResponse) => {

  // console.log(request.query);
  
  const user = [
    { id: 1, name: "Elson Júnior" },
    { id: 2, name: "Jó Marques" },
    { id: 3, name: "Maria Coco" },
  ];

  return response.status(200).json(user);
};

export default users;
