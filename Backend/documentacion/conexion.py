import mysql.connector

try:
    conexion = mysql.connector.connect(
        host = 'localhost',
        port = 3306,
        user = 'root',
        password = 'admin',
        db='mydb'
    )

    if conexion.is_connected():
        print("La conexión fue exitosa")

except:
    print("No se pudo conectar a la DB")

finally:
    if conexion.is_connected():
        conexion.close()
        print("La conexión fue cerrada")
