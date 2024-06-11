package com.magik.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
  private String userId;
  private String userName;

  private String password;
  private int gender;
  private String avatar;
  private List<Role> role;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date createTime;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date updateTime;
}
