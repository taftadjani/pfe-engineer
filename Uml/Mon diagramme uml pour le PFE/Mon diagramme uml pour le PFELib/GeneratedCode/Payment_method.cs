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
/// -- Carte bancaire
/// -- Cash à la livraison
/// -- à la boutique
/// -- Check
/// </remarks>
public class Payment_method
{
	public virtual object payment_method_id
	{
		get;
		set;
	}

	public virtual object name
	{
		get;
		set;
	}

	public virtual object description
	{
		get;
		set;
	}

	public virtual IEnumerable<Payment> Payment
	{
		get;
		set;
	}

}

