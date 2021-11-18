package com.luxoft.echoserver;

import java.io.*;
import java.net.Socket;

public class NewClient {
    public static final int PORT = 50000;
    public static final String HOST = "localhost";
    public static void main(String[] args) throws IOException {
        try (Socket socket = new Socket(HOST,PORT);
             BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))
        ){
            bufferedWriter.write("Hello\n");
            bufferedWriter.flush();
            String echo = bufferedReader.readLine();
            System.out.println(echo);
        }
    }
}
