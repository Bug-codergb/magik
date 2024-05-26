package com.magik.utils;

import java.util.Date;

public class FileUniqueName {
  public String getFileUniqueName(String name){
    return new Date().getTime()+name.substring(name.lastIndexOf("."));
  }
}
