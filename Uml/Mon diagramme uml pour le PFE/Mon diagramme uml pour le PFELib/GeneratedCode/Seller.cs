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

public class Seller : User
{
	public virtual object inserted_at
	{
		get;
		set;
	}

	public virtual object seller_name
	{
		get;
		set;
	}

	public virtual object description
	{
		get;
		set;
	}

	public override Star Star
	{
		get;
		set;
	}

	public virtual Advertissment Advertissment
	{
		get;
		set;
	}

}

