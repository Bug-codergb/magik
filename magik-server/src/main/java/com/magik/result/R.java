package com.magik.result;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class R<T> {
  public int code;
  public String message;
  public T data;
  public static <K> R<K> ok(K data){
    return new R<>(200,"success",data);
  }
  public static <K> R<K> unauthorized(K data){
    return new R<>(401,"无权限访问",data);
  }
}
