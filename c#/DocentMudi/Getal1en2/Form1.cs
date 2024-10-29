using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Getal1en2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void ClearBtn_Click(object sender, EventArgs e)
        {
            Getal1TxtBx.Text = "";
            Getal2TxtBx.Text = "";
        }

        private void UitvoerenBtn_Click(object sender, EventArgs e)
        {
            int getal1 = Int32.Parse(Getal1TxtBx.Text);
            int getal2 = Int32.Parse(Getal2TxtBx.Text);

            if (getal1 == getal2) {
                Outputlbl.Text = "Getallen zijn even grote";
            }
            else if (getal1 < getal2) {
                Outputlbl.Text = "Getal 2 is groter";
            }
            else
            {
                Outputlbl.Text = "Getal 1 is groter";
            }
        }
    }
}
