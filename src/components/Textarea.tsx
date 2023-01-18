import Image from 'next/image'
import React from 'react'

function Textarea() {
  return (
    <div className="hero container">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left shadow-xxl shadow-indigo-300/50">
          <Image 
            src="/images/dog-placeholder.png" 
            alt="placeholder"  
            width={500} 
            height={500}
            className="rounded-xl " 
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-#181B2C">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-zinc-300 text-2xl label-text">Describe your pet</span>
              </label>
              <textarea 
                className="textarea textarea-bordered" 
                placeholder="Brief description about your dog"
              >
              </textarea>
            </div>
            <div className="w-full max-w-xs">
              <label className="block text-zinc-300 font-medium mb-2">
                Pick your favorite style
              </label>
              <select 
                className="w-full border bg-[#181B2C] text-zinc-300 border-gray-400 p-2 rounded-md"
              >
                <option value="" disabled selected>Pick one</option>
                <option value="Salvador Dali">Salvador Dali</option>
                <option value="Norman Rockwell">Norman Rockwell</option>
                <option value="Banksy">Banksy</option>
                <option value="Tim Burton">Tim Burton</option>
                <option value="Van Gogh">Van Gogh</option>
                <option value="Monet">Monet</option>
                <option value="8-bit Digital Art">8-bit Digital Art</option>
                <option value="Steampunk Art">Steampunk Art</option>
                <option value="Cyberpunk Art">Cyberpunk Art</option>
                <option value="Photorealism-e Art">Photorealism-e Art</option>
                <option value="Deco Art">Deco Art</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button 
                className="btn btn-primary"
              >
                Generate <span role="img" className="ml-2" aria-label="magic wand">💫</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Textarea