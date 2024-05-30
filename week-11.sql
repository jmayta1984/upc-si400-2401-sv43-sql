/*
Ejercicio: Crear un procedimiento almacenado que inserte un nuevo cliente. Maneje los errores utilizando transacciones.
*/
create procedure SPInsertCustomer
	@CustomerID nchar(5),
	@CompanyName nvarchar(40),
	@Birthdate date
as
begin
	begin try
		begin transaction TInsertCustomer
		insert into Customers(CustomerID, CompanyName, Birthdate)
			values(@CustomerID, @CompanyName, @Birthdate)
		print 'Cliente ingresado satisfactoriamente'

		commit transaction TInsertCustomer
	end try

	begin catch
		if (@@TRANCOUNT > 0)
		begin
			print error_message()
			rollback transaction TInsertCustomer
		end
	end catch
end 
go

exec SPInsertCustomer @CustomerId = 'WIWOL', @CompanyName ='Wonka Asociados',@Birthdate ='20180101'
go
