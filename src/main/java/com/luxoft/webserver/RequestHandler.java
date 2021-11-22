package com.luxoft.webserver;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class RequestHandler {
    public RequestHandler(int port, String path) throws IOException {

        ServerSocket serverSocket = new ServerSocket(port);
        Socket socket = serverSocket.accept();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String file = (new RequestParser().parse(bufferedReader.readLine()));

        String uri = path + file;
        socketWriter(uri, socket, bufferedReader);
        bufferedReader.close();
        serverSocket.close();
        System.out.println("Server Closing Connection by Sending => Ok");

    }


    //enum httpMethod = {"get", "post"};
    private void handle() {
//        new RequestParser(uri);
//            new Request();
//        new ResponseWriter();

    }

    private void socketWriter(String uri, Socket socket, BufferedReader bufferedReader) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));
        while (true) {
            String message = bufferedReader.readLine();
            if (message.equals("")) {
                break;
            }
        }
        System.out.println("Request obtained");
        bufferedWriter.write("HTTP/1.1 200 OK\r\n");
        bufferedWriter.write(new ResourceReader().reader(uri));

        bufferedWriter.close();
    }
}
