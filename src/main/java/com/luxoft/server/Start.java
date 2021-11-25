package com.luxoft.server;

import java.io.IOException;

public class Start {

    public static void main(String[] args) {

        WebServer server;
        try {
            server = new WebServer();
            server.setPort(50000);
            server.setWebAppPath("src/main/resources/webapp");
            server.start();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
