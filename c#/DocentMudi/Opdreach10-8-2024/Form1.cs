namespace Opdreach10_8_2024
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnFor_Click(object sender, EventArgs e)
        {
            int teller;

            lblOutput.Text = "Starting loop" + "\r\n";

            for (teller = 0; teller < 5; teller++)
            {
                lblOutput.Text = lblOutput.Text + "Current count is " + teller + "\r\n";
            }

            lblOutput.Text = lblOutput.Text + "Loop Stopped";
        }

        private void btnWhile_Click(object sender, EventArgs e)
        {
            int teller = 0;

            lblOutput.Text = "Starting Loop" + "\r\n";

            while (teller < 5)
            {
                lblOutput.Text = lblOutput.Text + "Current Count is " + teller + "\r\n";

                teller++;
            }

            lblOutput.Text = lblOutput.Text + "Loop Stopped.";
        }

        private void btnDo_Click(object sender, EventArgs e)
        {
            int teller = 0;
            lblOutput.Text = "Starting Loop " + "\r\n";

            do
            {
                lblOutput.Text = lblOutput.Text + " Current count is " + teller + "\r\n";
                teller++;


            } while (teller < 5);

                lblOutput.Text = lblOutput.Text + "Current count is  " + teller + "\r\n";
                

            
        }

        private void ClearBtn_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
        }
    }
}
