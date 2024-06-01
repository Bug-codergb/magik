package com.magik.dto.menu;

import com.magik.bean.Menu;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuDTO extends Menu {
  private String parentId;
}
