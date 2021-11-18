package com.luxoft.echoserver;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class NewServer {

        public static final int PORT = 50000;
        public static final String HOST = "localhost";
        public static void main(String[] args) throws Exception {
            try (ServerSocket serverSocket = new ServerSocket(PORT);
                 Socket socket = serverSocket.accept();
                 BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
                 BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()))
            ){
                while(true) {
                    String message = bufferedReader.readLine();
//                    bufferedWriter.write("echo: " + message + "\n");
                    System.out.println(message);
                    if(message.equals("")){
                        break;
                    }
                }
                System.out.println("Request obtained");
                bufferedWriter.write("HTTP/1.1 200 OK\n\n");
//
                bufferedWriter.write(readContent("src/main/resources/webapp/index.html"));
//                bufferedWriter.write(readContent("src/main/resources/webapp/css/style.css"));
//                bufferedWriter.write("scr/main/resources/webapp"+"index.html");
//                bufferedWriter.flush();


        }


    }
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

}
