package com.luxoft.echoserver;

public class Starter {
    public static void main(String[] args) throws Exception {
        WebServer server = new WebServer();
        server.setPort(50000);
        server.setWebAppPath("src/main/resources/webapp/");
        server.start();
    }
}
//