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
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        private void UitvoerenBtn_Click(object sender, EventArgs e)
        {
            try
            {
                int i = 0;
                while (i < Convert.ToInt32(keerTxtBx.Text))
                {
                    label2.Text = label2.Text + "" + Convert.ToString(i)+ "\n";
                    i++;
                }

            }
            catch(Exception ee) {
                label2.Text =  ee.Message;
            }
        }

        private void ClearBtn_Click(object sender, EventArgs e)
        {
            keerTxtBx.Text = "";
            label2.Text = "";
        }
    }
}
