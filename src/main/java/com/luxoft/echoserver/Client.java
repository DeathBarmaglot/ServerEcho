package com.luxoft.echoserver;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class Client implements AutoCloseable {

    private final DataOutputStream outputStream;
    private final BufferedReader bufferedReader;
    public static final int PORT = 50000;
    public static final String HOST = "localhost";
    public static final String message = "Echo";

    public Client() throws IOException {
        Socket client = new Socket(HOST, PORT);
        outputStream = new DataOutputStream(client.getOutputStream());
        bufferedReader = new BufferedReader(new InputStreamReader(client.getInputStream()));
    }

    public void sendRequest(String message) throws IOException {
        System.out.println("Sending to Server: " + message);
        outputStream.writeBytes(message + "\n");
        outputStream.flush();
        String responseLine = bufferedReader.readLine();
        System.out.println("Server Sent: " + responseLine);
    }

    public void close() throws IOException {
        bufferedReader.close();
        outputStream.close();
    }

    public static void main(String[] args) throws IOException {
        Client client = new Client();
        client.sendRequest(message);
    }
}