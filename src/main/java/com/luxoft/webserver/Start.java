package com.luxoft.webserver;

import java.io.IOException;

public class Start {

    public static void main(String[] args) throws IOException {

        WebServer server;
        server = new WebServer();
        server.setPort(50500);
        server.setWebAppPath("src/main/resources/webapp/");
        try {
            server.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

