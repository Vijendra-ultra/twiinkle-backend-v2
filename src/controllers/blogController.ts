import { NextFunction, Request, Response } from "express";

export function sendHello(req: Request, res: Response, next: NextFunction) {
    try {
        res.json({ message: "Hi hello" });
    } catch (error) {
        next(error);
    }
}
