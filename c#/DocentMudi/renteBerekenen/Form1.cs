using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace renteBerekenen
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void SubmitBtn_Click(object sender, EventArgs e)
        {
            //10000 -> 1.5%
            //>10000 -> 2%

            String naam = naamTxtBx.Text + " " + achterNaamTxtbx.Text;
            int bedraag = Int32.Parse(spaarBedraagTxtbx.Text);
           
            if (bedraag == 10000 || bedraag < 10000) {
                double Total = bedraag * 1.015;
                double renteErbij = Total - bedraag;
                int rente = (int)Math.Round(renteErbij);

                Outputlbl.Text = naam + "\n" +
                    "U ontvang voor een spaarbedgraag van " + bedraag + "\n"
                    + "aan rente: " + rente; 
            }

            if (bedraag > 10000)
            {
                double Total = bedraag * 1.02;
                double renteErbij = Total - bedraag;
                int rente = (int)Math.Round(renteErbij);

                Outputlbl.Text = naam + "\n" +
                    "U ontvang voor een spaarbedgraag van " + bedraag + "\n"
                    + "aan rente: " + rente;
            }
        }

        private void BackBtn_Click(object sender, EventArgs e)
        {
            naamTxtBx.Text = "";
            achterNaamTxtbx.Text = "";
            spaarBedraagTxtbx.Text = "";
        }
    }
}
