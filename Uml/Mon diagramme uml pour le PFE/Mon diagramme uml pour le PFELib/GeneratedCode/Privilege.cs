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
/// -- Edit Nom
/// -- Edit Prenom
/// -- Edit mail
/// -- Supprimer account
/// -- Annuler une commande
/// </remarks>
public class Privilege
{
	public virtual object privilege_id
	{
		get;
		set;
	}

	public virtual object title
	{
		get;
		set;
	}

	public virtual object description
	{
		get;
		set;
	}

	public virtual IEnumerable<User> User
	{
		get;
		set;
	}

}

