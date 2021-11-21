package com.luxoft.echoserver;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.*;
import java.net.URI;
import java.util.HashMap;
import java.util.Map;

import static com.luxoft.echoserver.RequestHandler.readContent;

public class ResourceReader implements HttpHandler {

    @Override

    public void handle(HttpExchange he) throws IOException {
        // parse request
        Map<String, Object> parameters = new HashMap<>();
        URI requestedUri = he.getRequestURI();
        String query = requestedUri.getRawQuery();

        new RequestParser(query, parameters);

        StringBuilder response = new StringBuilder();
        for (String key : parameters.keySet())
            response.append(key).append(" = ").append(parameters.get(key)).append("\n");
        he.sendResponseHeaders(200, response.length());
        OutputStream os = he.getResponseBody();

        os.write(readContent().getBytes());
        os.close();
    }


}
