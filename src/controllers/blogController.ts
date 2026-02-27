import config from "../config/config";
import { NextFunction, Request, Response } from "express";
export function sendHello(req: Request, res: Response, next: NextFunction) {
    try {
        res.json({ message: "Hi hello" });
    } catch (error) {
        next(error);
    }
}

export function writeEnv(req: Request, res: Response, next: NextFunction) {
    try {
        res.json({
            env: `${config.aws_access_key_id} and ${config.aws_access_secret_key}`,
        });
    } catch (error) {
        next(error);
    }
}
