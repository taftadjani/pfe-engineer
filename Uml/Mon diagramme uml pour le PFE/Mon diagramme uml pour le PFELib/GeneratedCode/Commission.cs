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
/// COMMISSION TYPE
/// -- TRANSACTIONNALY
/// -- MONTHLY
/// -- YEARLY
/// </remarks>
public class Commission
{
	public virtual object commission_id
	{
		get;
		set;
	}

	public virtual object percentage
	{
		get;
		set;
	}

	public virtual object created_at
	{
		get;
		set;
	}

	public virtual object commission_type
	{
		get;
		set;
	}

	public virtual object enabled
	{
		get;
		set;
	}

}

