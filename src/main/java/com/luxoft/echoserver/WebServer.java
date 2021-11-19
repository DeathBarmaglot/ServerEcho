package com.luxoft.echoserver;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class WebServer {

    public static int PORT = 50000;
    public static String PATH = "src/main/resources";
    public static final String HOST = "localhost";


    private static String readContent(String path) throws IOException {
        InputStream inputStream = new FileInputStream(path);
        String result = "";
        int letter;
        while ((letter = inputStream.read()) != -1) {
            result += (char) letter;

        }
        inputStream.close();
        return result;
    }

    public void setPort(int port) {
        PORT = port;
    }

    public void setWebAppPath(String path) {
        PATH = path;
    }

    public void start() throws Exception {
        try (ServerSocket serverSocket = new ServerSocket(PORT);
             Socket socket = serverSocket.accept();
             BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))
        ) {

            while (true) {
                String message = bufferedReader.readLine();
                if (message.equals("")) {
                    break;
                }
            }
            System.out.println("Request obtained");
            bufferedWriter.write("HTTP/1.1 200 OK\r\n");

            bufferedWriter.write(readContent(PATH + "index.html"));

        }
    }
}
