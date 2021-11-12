package com.luxoft.echoserver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

public class Server implements AutoCloseable {
    public static final int length = 50;
    public static final int PORT = 50000;
    public static final String HOST = "localhost";
    private final ServerSocket server;
    private static BufferedReader input;
    private static PrintStream outputStream;

    public static void main(String[] args) {
        try (Server server = new Server()) {
            server.start();
        } catch (IOException e) {}
    }

    public Server() throws IOException {
        server = new ServerSocket(PORT, length, InetAddress.getByName(HOST));
        System.out.println("Created Server");
    }

    public void start() throws IOException {
        String line;
        System.out.println("Server Ready: " + server);
        Socket clientSocket = server.accept();
        System.out.println("Received Connection from " + clientSocket);
        input = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
        outputStream = new PrintStream(clientSocket.getOutputStream());
        while ((line = input.readLine()) != null) {
            System.out.println("Server Got => " + line);
            System.out.println("Server echoing line back => " + line);
            outputStream.println(line);
            outputStream.flush();
        }
    }

    public void close() throws IOException {
        System.out.println("Server Closing Connection by Sending => Ok");
        input.close();
        outputStream.close();
        server.close();
    }
}