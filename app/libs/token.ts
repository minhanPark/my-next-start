import jwt from "jsonwebtoken";

export const generateToken = (id: number) => {
  try {
    const token = jwt.sign({ id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });
    return token;
  } catch (e) {
    console.log(e);
  }
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch (e) {
    console.log(e);
  }
};
