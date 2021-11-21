package com.luxoft.echoserver;

import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

public class Server {
    public static final int PORT = 50000;

    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        System.out.println("server started at " + PORT);
        server.createContext("/", new RequestHandler());
        server.createContext("/css", new RequestHandler());
        server.createContext("/get", new ResourceReader());
        server.createContext("/post", new ResponseWriter());
        server.setExecutor(null);
        server.start();

    }

}

