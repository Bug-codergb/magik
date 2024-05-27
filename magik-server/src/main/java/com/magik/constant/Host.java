package com.magik.constant;

public enum Host {
  HOST_NAME("http://localhost:8888"),
  MINIO_HOST("http://localhost:9000");
  private final String HOST;
  Host(String host){
    this.HOST =host;
  }
  public String getHOST(){
    return HOST;
  }
}
