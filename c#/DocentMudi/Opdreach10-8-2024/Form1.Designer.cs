namespace Opdreach10_8_2024
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            lblOutput = new Label();
            btnFor = new Button();
            btnWhile = new Button();
            btnDo = new Button();
            ClearBtn = new Button();
            SuspendLayout();
            // 
            // lblOutput
            // 
            lblOutput.BackColor = SystemColors.ActiveBorder;
            lblOutput.Location = new Point(205, 81);
            lblOutput.Name = "lblOutput";
            lblOutput.Size = new Size(437, 220);
            lblOutput.TabIndex = 0;
            lblOutput.Text = "Output";
            // 
            // btnFor
            // 
            btnFor.Location = new Point(515, 320);
            btnFor.Name = "btnFor";
            btnFor.Size = new Size(127, 48);
            btnFor.TabIndex = 1;
            btnFor.Text = "For";
            btnFor.UseVisualStyleBackColor = true;
            btnFor.Click += btnFor_Click;
            // 
            // btnWhile
            // 
            btnWhile.Location = new Point(350, 320);
            btnWhile.Name = "btnWhile";
            btnWhile.Size = new Size(127, 48);
            btnWhile.TabIndex = 2;
            btnWhile.Text = "While";
            btnWhile.UseVisualStyleBackColor = true;
            btnWhile.Click += btnWhile_Click;
            // 
            // btnDo
            // 
            btnDo.Location = new Point(205, 320);
            btnDo.Name = "btnDo";
            btnDo.Size = new Size(127, 48);
            btnDo.TabIndex = 3;
            btnDo.Text = "Do..While";
            btnDo.UseVisualStyleBackColor = true;
            btnDo.Click += btnDo_Click;
            // 
            // ClearBtn
            // 
            ClearBtn.Location = new Point(350, 374);
            ClearBtn.Name = "ClearBtn";
            ClearBtn.Size = new Size(137, 53);
            ClearBtn.TabIndex = 4;
            ClearBtn.Text = "Clear";
            ClearBtn.UseVisualStyleBackColor = true;
            ClearBtn.Click += ClearBtn_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(ClearBtn);
            Controls.Add(btnDo);
            Controls.Add(btnWhile);
            Controls.Add(btnFor);
            Controls.Add(lblOutput);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
        }

        #endregion

        private Label lblOutput;
        private Button btnFor;
        private Button btnWhile;
        private Button btnDo;
        private Button ClearBtn;
    }
}
