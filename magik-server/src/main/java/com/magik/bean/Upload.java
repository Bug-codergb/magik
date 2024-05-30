package com.magik.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@NoArgsConstructor
@Data
@AllArgsConstructor
@ToString
public class Upload {
  private String id;
  private String originalname;
  private String url;
  private String filename;
  private String size;
  private String description;
  private Date createTime;
  private Date updateTime;
}
