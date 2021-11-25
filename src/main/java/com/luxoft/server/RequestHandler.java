package com.luxoft.server;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class RequestHandler  {
    public RequestHandler(int port, String path) throws IOException {

        ServerSocket serverSocket = new ServerSocket(port);
        Socket socket = serverSocket.accept();
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        System.out.println(socket);

        String file = (new RequestParser().parse(bufferedReader.readLine()));
//        String uri = path + file;
//        System.out.println(uri);
//        socketWriter(uri, socket, bufferedReader);
        bufferedReader.close();
        serverSocket.close();
        System.out.println("Server Closing Connection by Sending => Ok");

//    }

    }
}
