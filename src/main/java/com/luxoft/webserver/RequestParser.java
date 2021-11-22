package com.luxoft.webserver;

public class RequestParser{
    public String parse (String path){
        return path.split(" ")[1];

    }
        }

//    injectUriAndMethod();
//    injectHeader();
