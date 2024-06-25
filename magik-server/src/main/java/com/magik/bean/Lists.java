package com.magik.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Lists {
  private String id;
  private String name;
  private String description;
  private User user;
  private Integer count;
  private Integer attr;
  private String avatarUrl;
  private String coverUrl;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date createTime;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date updateTime;
}
