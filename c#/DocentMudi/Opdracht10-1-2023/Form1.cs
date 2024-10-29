using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Opdracht10_1_2023
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Check_Click(object sender, EventArgs e)
        {
            int age = Convert.ToInt16(YearBx.Text);

            if (age > 18)
            {
                label1.ForeColor = Color.Green;
                label1.Text = "You can smoke";
            }
            else
            {
                label1.ForeColor = Color.Red;
                label1.Text = "You can't smoke!!";
                
            }
        }
    }
}
