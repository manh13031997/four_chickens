package com.example.service.webService;

import com.example.model.entity.OrderDetail;

import java.util.Iterator;
import java.util.List;

public interface IOrderDetailService extends IGenerateService<OrderDetail> {
OrderDetail findOrderDetailByIdAndProductId(Long odId,Long productId);
List<OrderDetail> findOrderDetailByOrdersId(Long orderId);

}
