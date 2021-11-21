package com.luxoft.echoserver;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;

public class RequestHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String response = "";
        exchange.sendResponseHeaders(200, response.length());
        OutputStream outputStream = exchange.getResponseBody();
        response += readContent();
        outputStream.write(response.getBytes());
        outputStream.close();

    }

    public static String readContent()  {

        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream("src\\main\\resources\\webapp\\index.html");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        StringBuilder result = new StringBuilder();
        int letter;

        try {
            while (true) {
                assert inputStream != null;
                if (!((letter = inputStream.read()) != -1)) break;
                result.append((char) letter);
            }
            inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result.toString();

    }
}


