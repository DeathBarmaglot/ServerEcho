package com.luxoft.webserver;

import java.io.IOException;

import java.net.ServerSocket;

public class WebServer extends ServerSocket {

    private int port;
    private String path;

    public WebServer() throws IOException {
    }

    public void setPort(int port) {
        this.port = port;
    }

    public void setWebAppPath(String path) {
        this.path = path;
    }

    public void start() throws IOException {
        new RequestHandler(port, path);
    }
}
