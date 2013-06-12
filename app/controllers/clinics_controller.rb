class ClinicsController < ApplicationController
	def index
		@clinics = Clinic.all
	end
	def show
		@clinic = Clinic.find(params[:id])
	end
	def new
		@clinic = Clinic.new
	end
	def create
		@clinic = Clinic.new(params[:clinic])
		@clinic.save
		redirect_to thank_you_path
	end
	def create_admin
		@clinic = Clinic.new(params[:clinic])
		@clinic.save
		redirect_to clinic_path(@clinic)
	end
	def destroy
		@clinic = Clinic.find(params[:id])
		@clinic.destroy
		redirect_to clinics_path
	end
	def edit
		@clinic = Clinic.find(params[:id])
	end
	def update
		@clinic = Clinic.find(params[:id])
		@clinic.update_attributes(params[:clinic])

		redirect_to clinic_path(@clinic)
	end
end
