import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

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
import express from 'express';
import fetch from 'node-fetch';

export const router = express.Router();

// Spotify API endpoints
router.get('/api/spotify/tracks', async (req, res) => {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    // Get access token
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      },
      body: 'grant_type=client_credentials'
    });

    const authData = await authResponse.json();

    // Get tracks from a playlist (replace with your playlist ID)
    const playlistId = '37i9dQZF1DXcBWIGoYBM5M'; // Example: Top 50 Global playlist
    const tracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`, {
      headers: {
        'Authorization': `Bearer ${authData.access_token}`
      }
    });

    const tracksData = await tracksResponse.json();
    
    // Format the response
    const tracks = tracksData.items.map((item: any) => ({
      url: item.track.preview_url,
      name: item.track.name,
      imageUrl: item.track.album.images[0].url
    }));

    res.json(tracks);
  } catch (error) {
    console.error('Spotify API error:', error);
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
});
