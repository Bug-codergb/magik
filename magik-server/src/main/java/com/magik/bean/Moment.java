package com.magik.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Moment {
  private String id;
  private String content;
  private int view;
  private User user;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date createTime;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date updateTime;
  private List<Upload> mediaList;
}
