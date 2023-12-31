import dbConnect from "../../../utils/database";
import User from "../../../model/userForm";

export const POST = async (request) => {
  if (request.method === "POST") {
    try {
      await dbConnect();
      // console.log("Connected to Atlas");
      const { userId, path, location } = await request.json();

      const newUser = new User({
        userId,
        path,
        location,
      });

      await newUser.save();

      return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
      console.log(error);
      return new Response("Error saving user details", { status: 500 });
    }
  } else {
    console.log(error);
    return new Response("Method not allowed", { status: 405 });
  }
};
