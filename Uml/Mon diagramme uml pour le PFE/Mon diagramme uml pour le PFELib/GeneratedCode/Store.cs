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

/// <remarks>
/// BELONG TO TYPE
/// -- user
/// -- company
/// </remarks>
public class Store
{
	public virtual object #location_id
	{
		get;
		set;
	}

	public virtual object #phone_id
	{
		get;
		set;
	}

	public virtual object #mail_id
	{
		get;
		set;
	}

	public virtual object description
	{
		get;
		set;
	}

	public virtual object store_name
	{
		get;
		set;
	}

	public virtual object store_id
	{
		get;
		set;
	}

	public virtual object created_at
	{
		get;
		set;
	}

	public virtual object #created_by
	{
		get;
		set;
	}

	public virtual object keywords
	{
		get;
		set;
	}

	public virtual object store_image
	{
		get;
		set;
	}

	public virtual object store_mini_image
	{
		get;
		set;
	}

	public virtual object #commission_id
	{
		get;
		set;
	}

	public virtual object #belong_to
	{
		get;
		set;
	}

	public virtual object belong_to_type
	{
		get;
		set;
	}

	public virtual IEnumerable<Store_product> Store_product
	{
		get;
		set;
	}

	public virtual IEnumerable<Open_day_time> Open_day_time
	{
		get;
		set;
	}

	public virtual Mail Mail
	{
		get;
		set;
	}

	public virtual Phone Phone
	{
		get;
		set;
	}

	public virtual Company Company
	{
		get;
		set;
	}

	public virtual IEnumerable<Star> Star
	{
		get;
		set;
	}

	public virtual Newsletter Newsletter
	{
		get;
		set;
	}

}
