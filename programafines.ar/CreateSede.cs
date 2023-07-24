using SqlOrganize;
using SqlOrganizeMy;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace programafines.ar
{
    public class CreateSede
    {
        public string Generate() {
            Config config = new Config
            {
                connectionString = ConfigurationManager.AppSettings.Get("connectionString"),
                modelPath = ConfigurationManager.AppSettings.Get("modelPath"),
            };

            var db = new DbMy(config);


            var data = db.Query("comision")
                .Fields("sede-_Id, sede-numero, sede-nombre, domicilio-_Id, domicilio-calle, domicilio-numero, domicilio-entre, domicilio-localidad, domicilio-barrio")
                .Size(0)
                .Where(@"
        $calendario-anio = @0 
        AND $calendario-semestre = @1 
    ")
                .Parameters("2023", "2").ListDict();

            string txt = @"
var sedes = [
";
            foreach (var row in data)
            {

                txt += @"    {
        ""nombre_institucion"": """ + row["sede-nombre"] + @""",
        ""tipo_establecimiento"": ""Otros"",
        ""direccion_institucion"": """ + row["domicilio-calle"] + @""",
        ""nro_direccion"": """ + row["domicilio-numero"] + @""",
        ""calle1"": """ + row["domicilio-entre"] + @""",
        ""calle2"": """",
        ""localidad_institucion"": """ + row["domicilio-localidad"] + " " + row["domicilio-barrio"] + @"""
    },
";

            }

            txt += @"];
";

            return txt;
        }
    }
}
