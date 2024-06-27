package com.magik.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
  private String id;
  private String content;
  private User user;
  private Comment reply;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date createTime;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date updateTime;
}
