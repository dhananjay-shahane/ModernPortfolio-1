import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/api/spotify/tracks', async (req, res) => {
  try {
    const response = await fetch('https://api.spotify.com/v1/me/tracks', {
      headers: {
        'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tracks');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching tracks:', error);
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
});

export default router;


export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message
      const message = await storage.createContactMessage(validatedData);
      
      return res.status(201).json({
        success: true,
        message: "Message sent successfully!",
        data: message,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}