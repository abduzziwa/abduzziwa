namespace Getal1en2
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.Outputlbl = new System.Windows.Forms.Label();
            this.Getal1lbl = new System.Windows.Forms.Label();
            this.Getal2lbl = new System.Windows.Forms.Label();
            this.ClearBtn = new System.Windows.Forms.Button();
            this.UitvoerenBtn = new System.Windows.Forms.Button();
            this.Getal1TxtBx = new System.Windows.Forms.TextBox();
            this.Getal2TxtBx = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // Outputlbl
            // 
            this.Outputlbl.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.Outputlbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 20F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Outputlbl.Location = new System.Drawing.Point(197, 197);
            this.Outputlbl.Name = "Outputlbl";
            this.Outputlbl.Size = new System.Drawing.Size(456, 91);
            this.Outputlbl.TabIndex = 0;
            // 
            // Getal1lbl
            // 
            this.Getal1lbl.AutoSize = true;
            this.Getal1lbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Getal1lbl.Location = new System.Drawing.Point(202, 81);
            this.Getal1lbl.Name = "Getal1lbl";
            this.Getal1lbl.Size = new System.Drawing.Size(94, 29);
            this.Getal1lbl.TabIndex = 1;
            this.Getal1lbl.Text = "Getal 1";
            // 
            // Getal2lbl
            // 
            this.Getal2lbl.AutoSize = true;
            this.Getal2lbl.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Getal2lbl.Location = new System.Drawing.Point(202, 146);
            this.Getal2lbl.Name = "Getal2lbl";
            this.Getal2lbl.Size = new System.Drawing.Size(94, 29);
            this.Getal2lbl.TabIndex = 2;
            this.Getal2lbl.Text = "Getal 2";
            // 
            // ClearBtn
            // 
            this.ClearBtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ClearBtn.Location = new System.Drawing.Point(457, 314);
            this.ClearBtn.Name = "ClearBtn";
            this.ClearBtn.Size = new System.Drawing.Size(160, 80);
            this.ClearBtn.TabIndex = 3;
            this.ClearBtn.Text = "Clear";
            this.ClearBtn.UseVisualStyleBackColor = true;
            this.ClearBtn.Click += new System.EventHandler(this.ClearBtn_Click);
            // 
            // UitvoerenBtn
            // 
            this.UitvoerenBtn.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.UitvoerenBtn.Location = new System.Drawing.Point(194, 314);
            this.UitvoerenBtn.Name = "UitvoerenBtn";
            this.UitvoerenBtn.Size = new System.Drawing.Size(163, 80);
            this.UitvoerenBtn.TabIndex = 4;
            this.UitvoerenBtn.Text = "Uitvoeren";
            this.UitvoerenBtn.UseVisualStyleBackColor = true;
            this.UitvoerenBtn.Click += new System.EventHandler(this.UitvoerenBtn_Click);
            // 
            // Getal1TxtBx
            // 
            this.Getal1TxtBx.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Getal1TxtBx.Location = new System.Drawing.Point(370, 74);
            this.Getal1TxtBx.Name = "Getal1TxtBx";
            this.Getal1TxtBx.Size = new System.Drawing.Size(100, 36);
            this.Getal1TxtBx.TabIndex = 5;
            // 
            // Getal2TxtBx
            // 
            this.Getal2TxtBx.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Getal2TxtBx.Location = new System.Drawing.Point(370, 143);
            this.Getal2TxtBx.Name = "Getal2TxtBx";
            this.Getal2TxtBx.Size = new System.Drawing.Size(100, 36);
            this.Getal2TxtBx.TabIndex = 6;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.Getal2TxtBx);
            this.Controls.Add(this.Getal1TxtBx);
            this.Controls.Add(this.UitvoerenBtn);
            this.Controls.Add(this.ClearBtn);
            this.Controls.Add(this.Getal2lbl);
            this.Controls.Add(this.Getal1lbl);
            this.Controls.Add(this.Outputlbl);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label Outputlbl;
        private System.Windows.Forms.Label Getal1lbl;
        private System.Windows.Forms.Label Getal2lbl;
        private System.Windows.Forms.Button ClearBtn;
        private System.Windows.Forms.Button UitvoerenBtn;
        private System.Windows.Forms.TextBox Getal1TxtBx;
        private System.Windows.Forms.TextBox Getal2TxtBx;
    }
}

