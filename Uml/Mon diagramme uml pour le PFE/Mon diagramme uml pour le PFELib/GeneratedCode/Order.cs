﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool
//     Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class Order
{
	public virtual object order_id
	{
		get;
		set;
	}

	public virtual object #state_id
	{
		get;
		set;
	}

	public virtual object #payment_id
	{
		get;
		set;
	}

	public virtual object #delivery_id
	{
		get;
		set;
	}

	public virtual object inserted_at
	{
		get;
		set;
	}

	public virtual object #order_by_id
	{
		get;
		set;
	}

	public virtual object #commission_id
	{
		get;
		set;
	}

	public virtual Discount Discount
	{
		get;
		set;
	}

	public virtual Order_state Order_state
	{
		get;
		set;
	}

	public virtual IEnumerable<Order_detail> Order_detail
	{
		get;
		set;
	}

	public virtual IEnumerable<Bill> Bill
	{
		get;
		set;
	}

	public virtual Commission Commission
	{
		get;
		set;
	}

}

