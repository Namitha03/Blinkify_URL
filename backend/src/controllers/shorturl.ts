import { Request, Response } from "express";
import { urlModel } from "../models/shorturl";
import QRCode from "qrcode";

export const createUrl = async (req: Request, res: Response) => {
  try {
    const { Url } = req.body;
    const urlFound = await urlModel.find({ Url });
    if (urlFound.length > 0) {
      res.status(409);
      res.send(urlFound);
    } else {
      const shortUrl = await urlModel.create({ Url });
      res.status(201).send(shortUrl);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const getAllUrl = async (req: Request, res: Response) => {
  try {
    const getUrl = await urlModel.find().sort({ createdAt: -1 });
    if (getUrl.length < 0 || getUrl.length === 0) {
      res.status(404).send("Short URLs not Found");
    } else {
      res.status(200).send(getUrl);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
// export const getUrlById = async (req: Request, res: Response) => {

export const getUrlById = async (req: Request, res: Response) => {
  try {
    const shortUrlId = req.params.id;
    console.log("Requested short URL ID:", shortUrlId);

    const shortUrl = await urlModel.findOne({ shortUrl: shortUrlId });
    console.log("Found short URL document:", shortUrl);

    if (!shortUrl) {
      res.status(404).send("Short URL not found!");
    } else {
      shortUrl.clicks++;
      await shortUrl.save();
      console.log("Redirecting to:", shortUrl.Url);
      res.redirect(shortUrl.Url);
    }
  } catch (error) {
    console.error("Error fetching short URL:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const deleteUrl = async (req: Request, res: Response) => {
  try {
    const deleteUrl = await urlModel.findByIdAndDelete(req.params.id);
    if (!deleteUrl) {
      res.status(404).send("Url with Id not found");
    } else {
      res.status(200).send(deleteUrl);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
